# Khan Academy API v1 (removed) (khanacademy) v1.0

<!-- derived from openapi.json by `pnpm specs index khanacademy` — do not edit by hand -->

base: https://www.khanacademy.org | auth: apiKey (header Authorization) | 32 operations in 9 resources

Each line is `METHOD /path — operationId: summary`. For a request body, parameters or response shape, look the operationId up in `openapi.json`; for the objects an operation returns, see `data-schemas/index.json`.

## Badges
- GET /api/v1/badges — listBadges: List all badges (with the user's earned badges when authenticated) (deprecated)
- GET /api/v1/badges/categories — listBadgeCategories: List badge categories (deprecated)
- GET /api/v1/badges/categories/{category} — getBadgeCategory: Get a badge category (deprecated)

## Exercises
- GET /api/v1/exercises — listExercises: List all exercises (deprecated)
- GET /api/v1/exercises/{exercise_name} — getExercise: Get an exercise (deprecated)
- GET /api/v1/exercises/{exercise_name}/followup_exercises — listExerciseFollowups: List exercises that have this exercise as a prerequisite (deprecated)
- GET /api/v1/exercises/{exercise_name}/videos — listExerciseVideos: List the videos associated with an exercise (deprecated)

## OAuth
- POST /api/auth2/request_token — createRequestToken: Get an OAuth 1.0a request token (auth flow v2) (deprecated)
- GET /api/auth2/authorize — authorizeRequestTokenPage: Browser approval page for a request token (deprecated)
- POST /api/auth2/authorize — authorizeRequestToken: Approve a request token directly with the app owner's credentials (deprecated)
- GET /api/auth2/access_token — createAccessToken: Exchange an authorised request token for an access token (deprecated)
- GET /api/auth/request_token — createRequestTokenV1: Get a request token (legacy v1 flow) (deprecated)
- GET /api/auth/access_token — createAccessTokenV1: Exchange a request token for an access token (legacy v1 flow) (deprecated)

## Playlists
- GET /api/v1/playlists/library — getPlaylistLibrary: Get the library tree (deprecated alias of /topictree) (deprecated)
- GET /api/v1/playlists/library/list — listLibraryPlaylists: List all playlists with their videos (deprecated)
- GET /api/v1/playlists/{playlist_title}/videos — listPlaylistVideos: List a playlist's videos (deprecated alias of topic videos) (deprecated)
- GET /api/v1/playlists/{playlist_title}/exercises — listPlaylistExercises: List a playlist's exercises (deprecated alias of topic exercises) (deprecated)

## Topics
- GET /api/v1/topic/{topic_id} — getTopic: Get a topic with its abbreviated children (deprecated)
- GET /api/v1/topic/{topic_id}/videos — listTopicVideos: List the videos in a topic (deprecated)
- GET /api/v1/topic/{topic_id}/exercises — listTopicExercises: List the exercises in a topic (deprecated)
- GET /api/v1/topictree — getTopicTree: Get the full topic tree (whole library, ~30MB) (deprecated)

## User exercise history
- GET /api/v1/user/exercises — listUserExercises: List the exercises a user has engaged with (deprecated)
- GET /api/v1/user/exercises/{exercise_name} — getUserExercise: Get a user's progress on one exercise (deprecated)
- GET /api/v1/user/exercises/{exercise_name}/followup_exercises — listUserExerciseFollowups: List the user's progress on follow-up exercises (deprecated)
- GET /api/v1/user/exercises/{exercise_name}/log — listUserExerciseLogs: List a user's problem logs for one exercise (deprecated)

## User video history
- GET /api/v1/user/videos — listUserVideos: List the videos a user has watched (deprecated)
- GET /api/v1/user/videos/{youtube_id} — getUserVideo: Get a user's progress on one video (deprecated)
- GET /api/v1/user/videos/{youtube_id}/log — listUserVideoLogs: List a user's viewing sessions for one video (deprecated)
- GET /api/v1/user/playlists — listUserPlaylists: List the playlists a user has watched (deprecated)

## Users
- GET /api/v1/user — getUser: Get the logged-in (or specified) user's data (deprecated)

## Videos
- GET /api/v1/videos/{video_id} — getVideo: Get a video (deprecated)
- GET /api/v1/videos/{youtube_id}/exercises — listVideoExercises: List the exercises associated with a video (deprecated)
