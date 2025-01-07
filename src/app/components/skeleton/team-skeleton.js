// team-skeleton.jsx
import { Skeleton } from './base-skeleton';
import { motion } from 'framer-motion';

// Team Member Card Skeleton
const TeamMemberCardSkeleton = () => (
    <div className="team-member-card">
      <div className="team-member-content">
        <div className="image-container">
          <Skeleton className="w-[150px] h-[150px] rounded-full mb-4" />
        </div>
        
        <Skeleton className="h-6 w-3/4 mx-auto mb-2" /> {/* Name */}
        <Skeleton className="h-4 w-2/3 mx-auto mb-4" /> {/* Role */}
        <Skeleton className="h-16 w-full mb-4" /> {/* Bio */}
        
        <div className="skills-container">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="mb-2">
              <Skeleton className="h-4 w-1/3 mb-1" /> {/* Skill name */}
              <Skeleton className="h-2 w-full" /> {/* Skill bar */}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-4">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index} className="w-8 h-8 rounded-full" /> /* Social icons */
          ))}
        </div>
      </div>
    </div>
  );
  
  // Team Page Skeleton
  const TeamPageSkeleton = () => (
    <div className="team-page">
      <div className="team-container">
        <div className="team-header mb-8">
          <Skeleton className="h-10 w-1/3 mx-auto mb-4" /> {/* Title */}
          <Skeleton className="h-4 w-2/3 mx-auto" /> {/* Description */}
        </div>
  
        <div className="team-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <TeamMemberCardSkeleton />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  
  export { TeamPageSkeleton, 
    TeamMemberCardSkeleton,
   };