# Node.js CI/CD aur Kubernetes Progress Tracker

Step complete aur verify hone par `[ ]` ko `[x]` karein. Date aur proof/notes bhi add karein.

| Done | Step | Kya karega | Completion check | Completed on | Proof / Notes |
|---|---|---|---|---|---|
| [ x ] | 1 | Simple Node.js project setup | App local par run ho | | |
| [ x ] | 2 | `/` aur `/health` endpoints banana | Dono expected response dein | | |
| [x] | 3 | Basic test cases likhna | `npm test` pass ho | 2026-10-19 | 3 tests pass: `/`, `/health`, aur unknown route (404) |
| [ x ] | 4 | `.gitignore` add → Git init → GitHub push | Code repository mein dikhe | | |
| [ x ] | 5 | GitHub Actions mein basic CI banana | Push par dependencies install aur tests run hon | | |
| [ x ] | 6 | Intentionally ek test fail karke push karna | CI fail ho; fix karne par pass ho | | |
| [ x ] | 7 | `Dockerfile` aur `.dockerignore` banana | Docker image build ho | | |
| [ ] | 8 | Container run aur port mapping check karna | Browser se container wali app chale | | |
| [ ] | 9 | Image tag karke manually Docker Hub push karna | Image registry mein dikhe | | |
| [ ] | 10 | CI mein Docker build aur push add karna | Tests pass hone par image automatically push ho | | |
| [ ] | 11 | Local Kubernetes cluster setup | Node ready dikhe | | |
| [ ] | 12 | Kubernetes `Deployment` aur `Service` banana | App Kubernetes se accessible ho | | |
| [ ] | 13 | Scaling, pod delete aur logs practice | Replicas badhein aur deleted pod replace ho | | |
| [ ] | 14 | AWS par Kubernetes setup | Cluster ready ho | | |
| [ ] | 15 | Pehle manually app deploy karna | AWS se app accessible ho | | |
| [ ] | 16 | CD integration karna | Successful CI ke baad new image deploy ho | | |
| [ ] | 17 | App change → GitHub push → full flow verify | Updated response live dikhe | | |
| [ ] | 18 | Rollout status aur rollback practice | Previous version restore kar sake | | |

## Learning Notes

- Repository URL:
- Docker Hub image:
- Local app URL:
- AWS app URL:
- Issues faced aur fixes:
