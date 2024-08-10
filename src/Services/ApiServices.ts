import axios from 'axios';
import { Customer } from '../types/customer';

const API_URL = 'https://dummyjson.com/users';

export async function fetchCustomers(): Promise<Customer[]> {
  const response = await axios.get(API_URL);
  return response.data.users.map((user: any) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    title: user.company.title,
    address: `${user.address.address}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}`,
  }));
}

const PHOTO_API_URL = 'https://api.unsplash.com/photos/random';
const ACCESS_KEY = 'rh9OUd66pQdreHBnNBHKrs4nXleYZLHT8Ebhr1PQ2S4';


export async function fetchPhotosByCategory(category: string, count: number = 9): Promise<string[]> {
  const response = await axios.get(PHOTO_API_URL, {
    params: { query: category, count, client_id: ACCESS_KEY },
  });
  return response.data.map((photo: any) => photo.urls.small);
}
