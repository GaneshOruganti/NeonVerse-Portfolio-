'use server';

/**
 * @fileOverview This file contains the Genkit flow for generating a concise skills summary.
 *
 * - generateSkillsSummary - A function that generates a skills summary for the 'About Me' section.
 * - SkillsSummaryInput - The input type for the generateSkillsSummary function.
 * - SkillsSummaryOutput - The return type for the generateSkillsSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillsSummaryInputSchema = z.object({
  skills: z.string().describe('A comma-separated list of skills.'),
});
export type SkillsSummaryInput = z.infer<typeof SkillsSummaryInputSchema>;

const SkillsSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and impactful summary of the skills.'),
});
export type SkillsSummaryOutput = z.infer<typeof SkillsSummaryOutputSchema>;

export async function generateSkillsSummary(input: SkillsSummaryInput): Promise<SkillsSummaryOutput> {
  return generateSkillsSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillsSummaryPrompt',
  input: {schema: SkillsSummaryInputSchema},
  output: {schema: SkillsSummaryOutputSchema},
  prompt: `You are a professional resume writer. Generate a concise and impactful "About Me" section summary based on the following skills: {{{skills}}}.  The summary should be no more than 2 sentences long and highlight the user's expertise and value proposition.`,
});

const generateSkillsSummaryFlow = ai.defineFlow(
  {
    name: 'generateSkillsSummaryFlow',
    inputSchema: SkillsSummaryInputSchema,
    outputSchema: SkillsSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
