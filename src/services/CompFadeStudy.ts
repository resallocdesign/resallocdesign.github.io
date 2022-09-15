import toast from "react-hot-toast";

interface IPostCompFadePost {
  prolificInfo: {
    pid: string;
    sessionId: string;
    studyId: string;
  };
  results: object;
  condition: object;
}

async function create({
  results,
  prolificInfo,
  condition,
}: IPostCompFadePost): Promise<any> {
  try {
    const body = JSON.stringify({ results, prolificInfo, condition });
    const postPromise = fetch("/api/v1/comp-fade-study", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    toast.promise(postPromise, {
      loading: "Please wait before continuing...",
      success: "You may proceed now.",
      error: "Failed to configure data. Please email coordinator.",
    });
  } catch (err) {
    throw new Error(err.message);
  }
}

export const CompFadeStudyService = {
  create,
};
