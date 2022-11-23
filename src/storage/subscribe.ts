var subscribers: string[] = [];
//intialze the subscription element true or false
export function instializeSubscription() {
  if (localStorage.getItem("sub") == null) {
    localStorage.setItem("sub", "false");
  } else {
    // console.log("sub users localstorage file", localStorage.getItem("sub"));
    localStorage.setItem("sub", "false");
  }
}

// get the subscription status
export function getSubscriptionStaus(): string {
  return localStorage.getItem("sub") ?? "false";
}
// set the subscription status
export function setSubscriptionStaus() {
  localStorage.setItem("sub", "true");
}
// set the subscription status to false
export function setSubscriptionStausfalse() {
  localStorage.setItem("sub", "false");
}

// intialization of the subscribers
export function intializeSubscribers() {
  if (localStorage.getItem("subscribers") == null) {
    localStorage.setItem("subscribers", JSON.stringify([]));
  } else {
    // console.log(
    //   "subscribed users localstorage file",
    //   localStorage.getItem("subscribers")
    // );
  }
}

// add a new subscriber to retain even after login
export function addSubscriber(username: string) {
  var subs: string[] = JSON.parse(`${localStorage.getItem("subscribers")}`);
  var flag: boolean = false;
  subs.filter((x: string) => {
    if (x === username) flag = true;
  });
  // if not subscribed add to the datbase
  if (!flag) {
    subs.push(username);
    localStorage.setItem("subscribers", JSON.stringify(subs));
  }
}
// get the list of subscribers
export function getSubscribedUsers(): string[] {
  return JSON.parse(`${localStorage.getItem("subscribers")}`);
}

// reset the subscriber array
export function resetSubscibersArray() {
  // calling this function will reset the whole array of subscribers
  localStorage.setItem("subscribers", JSON.stringify([]));
  //   console.log("subscribed users should be clear by now");
}
