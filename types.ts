export interface GeneratedReply {
  id: string;
  text: string;
  tone: 'flirty' | 'funny' | 'casual';
}

export interface AnalysisState {
  isLoading: boolean;
  error: string | null;
  result: GeneratedReply[] | null;
  imagePreview: string | null;
}