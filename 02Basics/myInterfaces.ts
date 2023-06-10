interface User {
    readonly dbId : number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number    
}

interface User {
    gitHubId : string
}

interface admin extends User {
    role: "admin" | "ta" | "learner"

}

const nidhinadmin : admin = {
    dbId : 4,
    gitHubId: "ba",
    email: "nidn@ga",
    userId: 4,
    role: "admin",
    startTrail : () => {
        return "dffe"
    },
    getCoupon: (name: "fhoi") => {
        return 12
    }

}

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