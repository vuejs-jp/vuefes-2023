import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
import { exit } from 'process'
import prettier from 'prettier'
import fs from 'fs'

const supabaseProjectUrl = process.env.SUPABASE_URL || ''
const supabaseApiKey = process.env.SUPABASE_KEY || ''
if (!supabaseProjectUrl || !supabaseApiKey) {
  console.error('the params are not enoght')
  exit(0)
}

async function fetchUsers() {
  const option = {}
  const client = createClient(supabaseProjectUrl, supabaseApiKey, option)
  const { data, error } = await client.from('event_users').select()

  if (error) {
    console.warn('error', error)
    return
  }

  let str = [
    "import { User } from '~/types/app'",
    `export const users: User[] = ${JSON.stringify(data)}`,
  ].join('\n')

  str = await prettier.format(str, {
    semi: false,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
  })

  try {
    fs.writeFileSync('app/utils/users.constants.ts', str)
  } catch (e) {
    console.log(e.message)
  }
}

await fetchUsers()
