"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResult } from "@/lib/scoring";
import PhotoCard from "@/components/PhotoCard";

export default function DiagnosisPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = questions[currentQ];
  const progress = ((currentQ + (answers[question.id] ? 1 : 0)) / questions.length) * 100;
  const allAnswered = questions.every((q) => answers[q.id]);

  function selectOption(optionId: string) {
    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      }
    }, 400);
  }

  function goBack() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  }

  function submitDiagnosis() {
    const result = calculateResult(answers);
    // Store result in sessionStorage for the result page
    sessionStorage.setItem("diagnosisResult", JSON.stringify(result));
    router.push("/result");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[var(--color-text-light)]">
            {currentQ + 1} / {questions.length}
          </span>
          <span className="text-xs text-[var(--color-text-light)]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 bg-[var(--color-beige)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-pink-muted)] progress-fill rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-8 animate-fade-in-up" key={question.id}>
        <h2 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)] mb-2">
          {question.question}
        </h2>
        {question.subtitle && (
          <p className="text-sm text-[var(--color-text-light)]">{question.subtitle}</p>
        )}
      </div>

      {/* Options as photo cards */}
      <div className="grid grid-cols-2 gap-3 mb-8" key={`options-${question.id}`}>
        {question.options.map((option, i) => (
          <div
            key={option.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <PhotoCard
              gradient={option.imageColor}
              title={option.label}
              size="sm"
              selected={answers[question.id] === option.id}
              onClick={() => selectOption(option.id)}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={goBack}
          disabled={currentQ === 0}
          className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-text-secondary)] disabled:opacity-30 transition-colors"
        >
          ← 前の質問
        </button>

        <div className="flex gap-1.5">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentQ(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentQ
                  ? "bg-[var(--color-pink-muted)] w-4"
                  : answers[q.id]
                  ? "bg-[var(--color-beige-dark)]"
                  : "bg-[var(--color-beige)]"
              }`}
            />
          ))}
        </div>

        {currentQ < questions.length - 1 ? (
          <button
            onClick={() => setCurrentQ(currentQ + 1)}
            disabled={!answers[question.id]}
            className="text-sm text-[var(--color-text-light)] hover:text-[var(--color-text-secondary)] disabled:opacity-30 transition-colors"
          >
            次の質問 →
          </button>
        ) : (
          <button
            onClick={submitDiagnosis}
            disabled={!allAnswered}
            className={`text-sm px-5 py-2 rounded-full transition-all ${
              allAnswered
                ? "bg-[var(--color-brown-warm)] text-white hover:bg-[var(--color-brown-light)]"
                : "bg-[var(--color-beige)] text-[var(--color-text-light)]"
            }`}
          >
            結果を見る
          </button>
        )}
      </div>

      {/* Quick answer status */}
      {!allAnswered && currentQ === questions.length - 1 && (
        <p className="text-center text-xs text-[var(--color-pink-muted)] mt-4">
          未回答の質問があります。すべてお答えいただくと結果が表示されます。
        </p>
      )}
    </div>
  );
}
