const checkApiError = async <T>(res: Response): Promise<T> => {
  if (!res.ok) {
    const err = await res.json();
    err.status = res.status;
    throw err;
  }

  return res.json();
};

const post = async <T>(endpoint: string, payload: object) => {
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return checkApiError<T>(res);
};

const get = async <T>(endpoint: string) => {
  const res = await fetch(endpoint);

  return checkApiError<T>(res);
};

const create = (baseUrl: string) => {
  const correctedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return {
    post: <T>(endpoint: string, payload: object) =>
      post<T>(`${correctedBaseUrl}${endpoint}`, payload),
    get: <T>(endpoint: string) => get<T>(`${correctedBaseUrl}${endpoint}`),
  };
};

export const fetchApi = {
  post,
  get,
  create,
};
