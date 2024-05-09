export async function getRequestData(request) {
  try {
    const contentType = request.headers.get('content-type');

    if (contentType?.includes('multipart/form-data')) {
      const formData = await request.formData();
      return Object.fromEntries(formData.entries());
    }

    return request.json();
  } catch (err) {
    console.error('Failed to parse request', err);

    throw new Error('Invalid request');
  }
}
