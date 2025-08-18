import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { mockUsers } from './mock-data';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    // Initialize with mock users for development if database is empty
    await this.initializeMockUsers();
  }

  private async initializeMockUsers() {
    const existingUsersCount = await this.userRepository.count();

    if (existingUsersCount === 0) {
      console.log('📦 Database is empty, seeding with mock users...');

      for (const mockUser of mockUsers) {
        const hashedPassword = await bcrypt.hash(mockUser.password, 10);
        const user = this.userRepository.create({
          name: mockUser.name,
          email: mockUser.email,
          password: hashedPassword,
        });
        await this.userRepository.save(user);
      }

      console.log(`✅ Seeded ${mockUsers.length} mock users to database`);
      console.log('📋 Mock users available for login:');
      mockUsers.forEach((user) => {
        console.log(`  📧 ${user.email} / 🔒 ${user.password}`);
      });
    } else {
      console.log(`✅ Database already has ${existingUsersCount} users`);
    }
  }

  async create(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
