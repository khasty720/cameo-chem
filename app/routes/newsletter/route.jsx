import {json} from '@shopify/remix-oxygen';
import * as yup from 'yup';
import {getRequestData} from '../../lib/request';

const newsletterSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

/**
 * @param {ActionFunctionArgs}
 */
export async function action({request}) {
  if (request.method !== 'POST') {
    return json({error: 'Method not allowed'}, {status: 405});
  }

  try {
    // Parse the request body
    const data = await getRequestData(request);

    // Validate the request body
    const {email} = await newsletterSchema.validate(data);

    return json({
      sucsess: true,
      message: `${email} subscribed to the newsletter!`,
    });
  } catch (err) {
    const error = err?.message ?? 'Failed to subscribe to the newsletter';
    const status = err?.name === 'ValidationError' ? 422 : 400;

    console.error('Error subscribing to the newsletter', err);

    return json({error}, {status});
  }
}
