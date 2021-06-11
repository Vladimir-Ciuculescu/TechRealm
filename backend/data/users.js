import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,   
    },
     {
        name: 'Marian',
        email: 'marian@yahoo.com',
        password: bcrypt.hashSync('123456',10),
          
    },
      {
        name: 'Ana',
        email: 'ana@gmail .com',
        password: bcrypt.hashSync('123456',10),
          
    }
      
]

export default users;