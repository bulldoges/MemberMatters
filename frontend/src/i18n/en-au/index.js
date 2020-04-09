// This is just an example,
// so you can safely delete all default props below

export default {
  menuLink: {
    rootIndex: 'Dashboard',
    dashboard: 'Dashboard',
    webcams: 'Webcams',
    login: 'Login',
    resetPassword: 'Reset Password',
    logout: 'Logout',
    register: 'Register',

    adminTools: 'Admin Tools',
    groupMembers: 'Group Members',
    meetings: 'Meetings',
    members: 'Members',
    groups: 'Groups',
    doors: 'Doors',
    interlocks: 'Interlocks',

    memberTools: 'Member Tools',
    reportIssue: 'Report Issue',
    proxy: 'Proxy Votes',
    recentSwipes: 'Recent Swipes',
    lastSeen: 'Last Seen',
    membership: 'Membership',
    profile: 'Profile',
    checkAccess: 'Check Access',
    memberbucks: 'Spacebucks',
  },
  error: {
    loginFailed: 'Your username or password was incorrect.',
    requestFailed: 'Sorry, we\'re having trouble performing that action. Please try again later.',
    pageNotFound: 'Page not found',
    400: ' Sorry, there was an error with your request. (Error 400)',
    401: ' Sorry, you need to be logged in to access this page. (Error 401)',
    403: ' Sorry, you don\'t have permission to access this page. (Error 403)',
    404: ' Sorry, that page could not be found. (Error 404)',
    500: ' Sorry, there was a server error. Please try again later. (Error 500)',
  },
  logoutPage: {
    logoutSuccess: 'Logout successful.',
    logoutFailed: 'There was an error logging out. Please refresh the page and try again.',
  },
  webcams: {
    pageDescription: 'This page shows our public webcams, updated every minute for your convenience.',
  },
  about: {
    title: 'About MemberMatters',
    description: 'This is an open source, full featured membership portal. It is designed for '
    + 'HSBNE (Hackerspace Brisbane). It was created by Jaimyn Mayer, with a little help from some '
    + 'HSBNE members.',
    linkText: 'on GitHub',
  },
  button: {
    submit: 'Submit',
    ok: 'Ok',
    reset: 'Reset',
    cancel: 'Cancel',
    close: 'Close',
  },
  loginCard: {
    login: 'Login',
    resetPassword: 'Reset Password',
    loginSuccess: 'Login Successful',
    registerHere: 'Register Here',
    notAMember: 'Not a member? ',
    loginToContinue: 'Please login to continue',
    forgottenPassword: 'Forgot your password?',
    forgottenPasswordDescription: 'Please enter your email address and click submit. You will '
      + 'receive an email with further instructions.',
    emailLabel: 'Email address',
    resetSuccess: 'Success. Check your email for further instructions.',
    resetFailed: 'There was a problem resetting your password. Check your email address or '
      + 'try again later.',
    resetInvalid: 'Your password reset link is invalid.',
    resetConfirm: 'Your password has been reset.',
    resetNotConfirm: 'There was a problem resetting your password.',
    backToLogin: 'Back to login page',
  },
  changePasswordCard: {
    pageTitle: 'Change Password',
    success: 'Your new password was saved successfully.',
    fail: 'There was an error saving your new password.',
  },
  validation: {
    invalidEmail: 'Please enter a valid email.',
    invalidPassword: 'Please enter a valid password.',
    invalidPhone: 'Please enter a valid phone number.',
    passwordNotMatch: 'Sorry, but your passwords don\'t match.',
    cannotBeEmpty: 'This field cannot be empty.',
    futureDate: 'Date must be today or in the future.',
  },
  access: {
    pageDescription: 'Your access permissions for doors and interlocks are shown below. Please '
      + 'contact the management committee if you believe you should have access to something that '
      + 'you don\'t.',
    inactive: 'Your membership is currently inactive. This may affect your access.',
    authorised: 'Authorised',
    unauthorised: 'Unauthorised',
    door: 'Door',
    doors: 'Doors',
    interlock: 'Interlock',
    interlocks: 'Interlocks',
  },
  lastseen: {
    pageDescription: 'Here is a list of when each member last tapped their card.',
  },
  recentSwipes: {
    pageDescription: 'Here is a list of the last 50 swipes from doors and interlocks.',
    inProgress: 'In Progress',
    timedOut: 'TIMED OUT',
  },
  reportIssue: {
    pageDescription: 'Report an issue',
    success: 'Your issue was reported succesfully.',
    fail: 'There was a problem reporting your issue.',
  },
  memberGroups: {
    pageDescription: 'You can browse our list of groups and see each group\'s membership and '
      + 'quorum.',
    activeMembers: 'Active Members',
    quorum: 'Quorum',
  },
  form: {
    saved: 'Saved',
    error: 'Error Saving',
    pageDescription: 'Edit any of the fields below and they will be automatically saved.',
    noResults: 'No Results',

    email: 'Email',
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone',
    screenName: 'Screen Name',
    date: 'Date',
    dateTime: 'Date & Time',
    chair: 'Chair',
    meetingType: 'Meeting Type',
    meetingDate: 'Meeting Date',
  },
  digitalId: {
    title: 'Digital ID',
    fullName: 'Full Name',
    memberState: 'Member Status',
    memberId: 'Member ID',
    memberSince: 'Member Since',
  },
  meetings: {
    memberName: 'Member Name',
    proxy: 'Proxy',
    dateAssigned: 'Date Assigned',
    proxyVotes: 'Proxy Votes',
    attendees: 'Attendees',
  },
  meetingForm: {
    pageDescription: 'Fill out the form below to create a new meeting.',
    newMeeting: 'New Meeting',
    meeting: 'Meeting',
    success: 'Successfully created meeting.',
    fail: 'Failed to create meeting, try again later.',
  },
  proxyForm: {
    pageDescription: 'This form allows you to give someone else your vote for a specific '
      + 'meeting. Always check with the other person before submission.',
    proxyBody: 'I, {memberName}, of {memberCity}, being a member of the association, appoint {proxyName} of {proxyCity} as my proxy to vote for me on my behalf at the {meetingName} meeting, to be held on the day of {meetingDate} and at any adjournment of the meeting.',
    proxySignature: 'Signed by {memberName} on this day of {currentDate}. ',
    proxyTo: 'To {siteOwner}:',

    noMeetings: 'There are no meetings scheduled.',

    meeting: 'Meeting',
    yourCity: 'Your city',
    proxyName: 'Proxy\'s name',
    proxyCity: 'Proxy\'s city',

    newProxy: 'New Proxy',
    editTitle: 'Edit Proxy',

    deleteTitle: 'Confirm Proxy Deletion',
    delete: 'Are you sure you want to delete this proxy?',
  },
  entityType: 'Association',
  groups: 'Groups',
  members: 'Members',
  group: 'Group',
  member: 'Member',
  failed: 'Action failed',
  success: 'Action was successful',
  warning: 'Warning',
  dataRefreshWarning: 'There was an error fetching new data. Any data that you see may not be up '
    + 'to date.',
};
