interface User {
  readonly dbId: number; // Represents a unique database identifier for the user (read-only)
  email: string; // Represents the user's email address
  userId: number; // Represents the user's ID
  googleId?: string; // Represents the user's Google ID (optional)
  startTrail(): string; // Represents a function to start a trail and returns a string
  getCoupon(couponName: string): number; // Represents a function to get a coupon by name and returns a number
}

interface User {
  gitHubId: string; // Represents the user's GitHub ID
}

interface Admin extends User {
  role: "admin" | "ta" | "learner"; // Represents the role of the admin, which can be "admin", "ta", or "learner"
}

const nidhinadmin: Admin = {
  dbId: 4,
  gitHubId: "ba",
  email: "nidn@ga",
  userId: 4,
  role: "admin",
  startTrail: () => {
    return "dffe";
  },
  getCoupon: (name: "fhoi") => {
    return 12;
  },
};

const nidhin: User = {
  dbId: 4,
  gitHubId: "ba",
  email: "nidn@ga",
  userId: 4,
  startTrail: () => {
    return "dffe";
  },
  getCoupon: (name: "fhoi") => {
    return 12;
  },
};
