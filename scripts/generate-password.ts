import bcrypt from 'bcryptjs'

async function generatePasswordHash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

async function main() {
  const passwords = ['admin123', 'teacher123', 'parent123']

  console.log('Generated Password Hashes:')
  console.log('='.repeat(50))

  for (const password of passwords) {
    const hash = await generatePasswordHash(password)
    console.log(`Password: ${password}`)
    console.log(`Hash: ${hash}`)
    console.log('-'.repeat(50))
  }
}

main()
