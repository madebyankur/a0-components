export const componentHooks = [
  {
    "name": "useMfaEnrollment",
    "description": "A hook to manage MFA enrollments.",
    "code": "\"use client\";\n\nimport { useCallback } from \"react\";\n\nexport default function useMfaEnrollment() {\n  const fetchFactors = useCallback(async () => {\n    try {\n      const response = await fetch(\"/api/auth/mfa\", {\n        method: \"GET\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n      });\n      const data = await response.json();\n\n      return data.filter((factor: any) => factor.enabled);\n    } catch (error) {\n      console.error(error);\n    }\n  }, []);\n\n  const createEnrollment = useCallback(async (factor: string) => {\n    try {\n      const response = await fetch(\"/api/auth/mfa\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({ factor }),\n      });\n      const data = await response.json();\n\n      return data;\n    } catch (error) {\n      console.error(error);\n    }\n  }, []);\n\n  const deleteEnrollment = useCallback(async (enrollmentId: string) => {\n    try {\n      const response = await fetch(\\`/api/auth/mfa/\\${enrollmentId}\\`, {\n        method: \"DELETE\",\n      });\n      return await response.json();\n    } catch (error) {\n      console.error(error);\n    }\n  }, []);\n\n  return { fetchFactors, createEnrollment, deleteEnrollment };\n}\n"
  }
];