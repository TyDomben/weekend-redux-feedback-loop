-- Database should be prime_feedback
-- Switch to "prime_feedback" before making:
DROP TABLE IF EXISTS "prime_feedback";
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Sample feedback item
INSERT INTO
  "feedback" (
    "feeling",
    "understanding",
    "support",
    "comments"
  ) --test values
VALUES
  (4, 4, 5, 'Doing Great!');