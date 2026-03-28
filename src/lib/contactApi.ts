type ContactPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return { ok: true as const };
}
