import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return new Response(
        JSON.stringify({
          error: 'Email is required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // TODO: Implement your email service integration here
    // For example, using SendGrid, Mailchimp, etc.
    console.log('New newsletter subscription:', email);

    return new Response(
      JSON.stringify({
        message: 'Successfully subscribed to newsletter',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process subscription',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}; 