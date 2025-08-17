import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.interface';
import { mockUsers } from './mock-data';

@Injectable()
export class UserService implements OnModuleInit {
  private users: User[] = [];
  private nextId = 1;

  async onModuleInit() {
    // Initialize with mock users for development
    await this.initializeMockUsers();
  }

  private async initializeMockUsers() {
    for (const mockUser of mockUsers) {
      const hashedPassword = await bcrypt.hash(mockUser.password, 10);
      const user: User = {
        id: this.nextId++,
        name: mockUser.name,
        email: mockUser.email,
        password: hashedPassword,
        createdAt: new Date(),
        age: mockUser.age,
      };
      this.users.push(user);
    }

    console.log(`✅ Initialized ${mockUsers.length} mock users`);
    console.log('Mock users available:');
    mockUsers.forEach((user) => {
      console.log(`  📧 ${user.email} / 🔒 ${user.password}`);
    });
  }

  async create(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = {
      id: this.nextId++,
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
