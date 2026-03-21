import { readFileSync } from 'fs';
import * as path from 'path';

export function getLoginData(): { email: string; password: string; invalidEmail: string; invalidPassword: string } {
    // resolve the path relative to this file so tests can import the helper from anywhere
    const filePath = path.resolve(__dirname, 'login-data.json');
    const rawData = readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
}