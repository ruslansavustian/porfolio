export interface MockUser {
  name: string;
  email: string;
  password: string;
  age?: number;
}

export const mockUsers: MockUser[] = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    age: 20,
  },
  {
    name: 'Ruslan Savustian',
    email: 'suff@gmail.com',
    password: '123456',
    age: 20,
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
  },
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    age: 25,
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
  },
  {
    name: 'Bob Wilson',
    email: 'bob@example.com',
    password: 'password123',
  },
  {
    name: 'Sarah Brown',
    email: 'sarah@example.com',
    password: 'password123',
  },
  {
    name: 'Mike Davis',
    email: 'mike@example.com',
    password: 'password123',
  },
  {
    name: 'Emma Wilson',
    email: 'emma@example.com',
    password: 'password123',
  },
];
