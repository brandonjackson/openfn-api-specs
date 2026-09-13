# Khan Academy API v1 (khanacademy) v1.0.0

<!-- derived from openapi.json by `pnpm specs index khanacademy` — do not edit by hand -->

base: https://www.khanacademy.org/api/v1 | auth: not declared | 13 operations in 7 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## badges
- GET /badges — listBadges: List all badges
- GET /badges/categories — listBadgeCategories: List badge categories

## exercises
- GET /exercises — listExercises: List all exercises
- GET /exercises/{exercise_name} — getExercise: Retrieve a single exercise by name

## playlists
- GET /playlists — listPlaylists: List all playlists
- GET /playlists/{topic_slug}/videos — getPlaylistVideos: List videos in a playlist

## topic
- GET /topic/{topic_slug} — getTopic: Retrieve a single topic by slug
- GET /topic/{topic_slug}/exercises — getTopicExercises: List exercises within a topic
- GET /topic/{topic_slug}/videos — getTopicVideos: List videos within a topic

## topictree
- GET /topictree — getTopicTree: Retrieve the full topic tree

## user
- GET /user — getUser: Retrieve the authenticated user's profile

## videos
- GET /videos — listVideos: List all videos
- GET /videos/{video_id} — getVideo: Retrieve a single video by id or readable id
