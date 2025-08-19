import { useApp } from "@/contexts/AppProvider";
import { Candidate } from "@/types";
import React from "react";

export const CandidateCard = ({ candidate }: { candidate: Candidate }) => {
  const { deleteCandidate } = useApp();
  const handleDelete = () => {
    if (
      window.confirm(
        `Удалить кандидата ${candidate.firstName} ${candidate.lastName}?`
      )
    ) {
      deleteCandidate(candidate.id);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-md font-semibold text-gray-900">
          {candidate.firstName} {candidate.lastName}
        </h4>
        <div className="flex space-x-1">
          <button
            className="text-blue-600 hover:text-blue-800 text-sm"
            onClick={() => console.log("Edit candidate:", candidate.id)}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:text-red-800 text-sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Дата рождения:</span>{" "}
        {new Date(candidate.birthDate).toLocaleDateString("ru-RU")}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Опыт:</span> {candidate.workExperience}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Навыки:</span> {candidate.skills}
      </p>
      <p className="text-xs text-gray-400 mt-2">
        Создан: {new Date(candidate.createdAt).toLocaleDateString("ru-RU")}
      </p>
    </div>
  );
};
