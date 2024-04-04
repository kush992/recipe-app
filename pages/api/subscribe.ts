// pages/api/users.js
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'data', 'users.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		try {
			const { email, name } = req.body;

			// Validate input (you can add more validation logic here)

			// Read existing user data (if any)
			const existingUsers = await fs.readFile(USERS_FILE, 'utf-8');
			const users = existingUsers ? JSON.parse(existingUsers) : [];

			// Add the new user
			users.push({ email, name });

			// Write updated user data back to the file
			await fs.writeFile(USERS_FILE, JSON.stringify(users));

			res.status(200).json({ message: 'User registered successfully!' });
		} catch (error) {
			console.error('Error registering user:', error);
			res.status(500).json({ message: 'Error registering user.' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed.' });
	}
}
