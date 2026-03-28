type ContactPayload = {
  name: string;
  workEmail: string;
  company: string;
  role: string;
  country: string;
  projectType: string;
  timeline: string;
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
