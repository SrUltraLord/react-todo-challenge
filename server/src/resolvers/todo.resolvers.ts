type GetTodosParams = {
  id: string;
  title: string;
};

export const Query = {
  getTodos: (_: any, { id, title }: GetTodosParams) => {
    return [
      { id: 1, title: "Do the laundry" },
      { id: 2, title: "Learn Next" },
    ];
  },
};

export const Mutation = {};
