// User types
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

// Candidate types
export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  workExperience: string;
  skills: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCandidateDto {
  firstName: string;
  lastName: string;
  birthDate: string;
  workExperience: string;
  skills: string;
}

// App State types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface CandidatesState {
  candidates: Candidate[];
  candidatesLoading: boolean;
}

export interface AppState extends AuthState, CandidatesState {
  // Future: можно добавить другие состояния (projects, settings, etc.)
}
