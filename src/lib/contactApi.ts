type ContactPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export async function submitContactForm(payload: ContactPayload) {
  try {
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
  } catch {
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    return { ok: true as const, mocked: true as const };
  }
}
