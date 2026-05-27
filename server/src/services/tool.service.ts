export async function generateMockText(prompt: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    prompt,
    result: `Mock AI response generated for: ${prompt}`,
    poweredBy: 'Shigosag'
  };
}