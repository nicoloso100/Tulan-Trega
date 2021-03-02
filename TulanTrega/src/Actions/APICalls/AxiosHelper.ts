import axios from 'axios';

export const PostRequest = async (
  url: string,
  data: any,
): Promise<IAxiosResponse> => {
  try {
    const result = await axios.post(url, data);
    return {
      ok: true,
      data: result.data.data,
      message: result.data.message,
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error.response.data.message,
    };
  }
};

export const GetRequest = async (url: string): Promise<IAxiosResponse> => {
  try {
    const result = await axios.get(url);
    return {
      ok: true,
      data: result.data.data,
      message: result.data.message,
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
      message: error.response.data.message,
    };
  }
};
