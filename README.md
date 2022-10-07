# Form validation challenge

Practice validating user input in the browser.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
1. Run `npm install` to install all the dependencies
1. Open `challenge/index.html` in your browser

## Checking your work

Each challenge has associated unit tests. You can either run all the tests with `npm test`, or each individual challenge's tests with `npm run test:1`, `npm run test:2` etc.

Make sure you read test failures carefully—the output can be noisy but the error message should provide useful information to help you.

## Challenge 1: Required fields

The form in `challenge/index.html` can be submitted without filling out any of the fields. Without adding any JS make sure these fields are present:

1. The `name` input
1. The `email` input
1. The `message` textarea

Make sure to mark these fields as required so the user knows they must fill them in.

## Challenge 2: Different types of fields

Currently all the fields accept anything as input. Without adding any JS make sure each of these fields is restricted to its type:

1. The `email` input should be a valid email
1. The `website` input should be a valid URL

## Challenge 3: Limit length

Some users are sending excessively long messages. Without adding any JS makes sure the `message` textarea only accepts up to 140 characters.

Make sure to tell the user about the limit so they aren't surprised when they try to submit.

## Challenge 4: Prevent uppercase

Users keep shouting at us, and it makes us feel bad. Without adding any JS make sure the `subject` input can only contain lowercase letters, numbers, and spaces.

## Challenge 5: Validity state for assistive tech

The validity of each field is not consistently exposed to assistive technologies like screen readers. Write some JS in `challenge/index.js` that uses the `aria-invalid` attribuet to help:

1. Mark all fields as valid at first
1. When a field fails validation mark it as invalid
1. When a field is edited mark it valid again
