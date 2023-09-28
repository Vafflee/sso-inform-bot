import { Person } from "../api/types";
import { User } from "../types";

export const parsePeople = (people: Person[]): User[] => {
  return people.map(p => ({
    id: p.id,
    name: p.name
  })) as User[]
}