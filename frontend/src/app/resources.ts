export enum Resources {
  Home = '/',

  Problems = 'problems',
  ProblemById = 'problem/:id',

  Contests = 'contests',
}

export function getResourceById(resource: Resources, id: number | string) {
  return resource.replace(':id', id.toString());
}
