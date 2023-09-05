import bcrypt from 'bcryptjs';

const hashing = async(password, saltRound=10)=>{
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}


const matchHashing = async(row, password)=>{
   const result = await bcrypt.compare(row, password);
   return result
}


export { hashing, matchHashing };
