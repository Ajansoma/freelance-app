const API_URL = `http://localhost:5000`;

export const httpSendData = async function (url, data) {
  const response = await fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data === null ? null : JSON.stringify(data),
  });
  if (!response.ok) {
    const txt = await response.text();
    throw Error(txt);
  }
  return await response.json();
};

export const httpGetData = async function (url) {
  const response = await fetch(`${API_URL}/${url}`);
  if (!response.ok) {
    const txt = await response.text();
    throw Error(txt);
  }
  return await response.json();
};

// export const httpGetLogin = async function (credentials) {
//   const response = await fetch(`${API_URL}/auth/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials),
//   });
//   if (!response.ok) {
//     const txt = await response.text();
//     throw Error(txt);
//   }
//   return await response.json();
// };

// export const httpGetLogout = async function () {
//   try {
//     const response = await fetch(`${API_URL}/auth/logout`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: null,
//     });
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpSendUser = async function (userData) {
//   try {
//     const response = await fetch(`${API_URL}/auth/register`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(userData),
//     });
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpSendGig = async function (gigs) {
//   try {
//     const response = await fetch(`${API_URL}/gigss`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(gigs),
//     });
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetGigs = async function (search, min, max) {
//   try {
//     const response = await fetch(
//       `${API_URL}/gigss?query=${search}&min=${min}&max=${max}`
//     );
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetGigById = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/gigss?userId=${id}`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetGig = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/gigss/single/${id}`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpDeleteGig = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/gigss/${id}`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpSendReviews = async function (review) {
//   try {
//     const response = await fetch(`${API_URL}/reviews`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(review),
//     });
//     // if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetReviews = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/reviews/${id}`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpSendOrders = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/orders/${id}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: null,
//     });
//     // if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

export const httpSendConversations = async function (id) {
  try {
    const response = await fetch(`${API_URL}/conversations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};

// export const httpGetConversations = async function () {
//   try {
//     const response = await fetch(`${API_URL}/conversations`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetConversation = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/conversations/single/${id}`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetOrders = async function () {
//   try {
//     const response = await fetch(`${API_URL}/orders`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpSendMessage = async function (messages) {
//   try {
//     const response = await fetch(`${API_URL}/messages`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(messages),
//     });
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

// export const httpGetMessages = async function (id) {
//   try {
//     const response = await fetch(`${API_URL}/messages/${id}`);
//     if (!response.ok) throw new Error();
//     return await response.json();
//   } catch (err) {
//     return err;
//   }
// };

export const httpUploadImage = async function (file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'grngdewg');
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/ajansoma/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (!response.ok) throw new Error();
    const { url } = await response.json();
    return url;
  } catch (err) {
    return err;
  }
};
