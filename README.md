# how-to-3-marketing

## PRODUCT DESCRIPTION

### ☝️Pitch

Have a life hack? Share it on how-to. Posts with the most likes / reviews will be at the top of the feed, simplifying life for everyone.

### ✅ MVP

- An on-boarding process for a new general user (user that will consume the service)
- On-boarding process for user who wants to generate content (i.e. organize how-to tutorials)
- Ability to easily create / setup a how - to guide
- Ability to easily edit / delete an a how-to guide
- Ability to easily view/ search / find / filter how-to guides

### 🏃‍♀️Stretch

- Web:
  - Add the ability to add photos and/or videos to be uploaded with an API like cloudinary.
- iOS:
  - Allow user to record a video of an uploaded "life hack"- Vine-esque: short 10 second snippets of steps.
  - Annotation to video ☝️- using fixed text/emoji to provide additional context.
 
## QUESTIONS TO ANSWER

### ☝️ Proposal

- What problem does your app solve?
  - Helps folks figure out how to do things they don't want to do
  - DIY projects? Secrets to better life?
  - Simple things that improve life in a minor way
  - Repurposing everyday household objects
  - Insightful instructions to make life easier
  - 'Life hack is any trick, shortcut, skill, or novelty method that increases productivity and efficiency, in all walks of life'
- Be as specific as possible; how does your app solve the problem?
  - Allows folks with insights to share with the world
  - Curating/finding instructions for little problems
- What is the mission statement?
  - Have a life hack? Share it on how-to. Posts with the most likes / reviews will be at the top of the feed, simplifying life for everyone.

### 💡 Features

- What features are required for your minimum viable product?
  - See above
- What features may you wish to put in a future release?
  - See above
- What do the top 3 similar apps do for their users?
  - Pinterest, WikiHow, Vine
  - Often entertaining
  - step-by-step instructions
  - Upvote stuff

### 🛠 Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?
  - Node
  - Express
  - Bootstrap
  - ReactStrap
  - Material UI
  - Core Data
  - (iOS UI stuff)
- Do the APIs you need require you to contact them to gain access?
  - no
- Are you required to pay to use said API(s)?
  - n/a

### 🎯 Target Audience

- Who is your target audience? Be specific.
  - People who need help with stuff
  - People who know stuff
- What feedback have you gotten from potential users?
  - n/a
- Have you validated this problem and your solution with a target audience? Describe how,
  - n/a

### 🔑 Prototype Key Feature(s)

- How long do you think it will take to implement these features?
  - An on-boarding process for a new general user (user that will consume the service)
  - On-boarding process for user who wants to generate content (i.e. organize how-to tutorials)
  - Ability to easily create / setup a how - to guide
  - Ability to easily edit / delete an a how-to guide
  - Ability to easily view/ search / find / filter how-to guides
  - BACKEND
    - (3 tables (maybe a couple more))
    - by end of Tuesday
    - Endpoint docs by Monday
  - REACT
    - Wed-early Thu
  - iOS
    - Wed
- Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
  - maybe

## DATA STRUCTURES / MODELS / ENDPOINTS

- User
  - username: String
  - password: String
  - userid: Int
  - posts: array(Post)
  - (photo: Data?)
  - friends: array(User)
- Post
  - title: String
  - author: User
  - body: String
  - timestamp: Date
  - likes: array(User)
  - (video: Data)
  - (tags: array(String))
- (Review)
