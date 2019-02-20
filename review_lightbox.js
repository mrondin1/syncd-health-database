// For full API documentation, including code examples, visit http://wix.to/94BuAAs

// $w.onReady(function () {
// 	//TODO: write your page related code here...

// });

import wixWindow from 'wix-window';
import wixData from 'wix-data';

let itemID;

$w.onReady(function () {
//  When the page loads, use the getContext function to get the object passed to the lightbox when it was opened. In this case, the object containins the current item ID.
    itemID = wixWindow.lightbox.getContext().itemID;
    console.log(itemID)

// Set the action that occurs before the new review is saved to the reviews collection via the SubmitReviews dataset.
 $w('#submitReviews').onBeforeSave(() => {
	//  Check if the reviewer rated the product.
  if ($w('#ratingsInput1').value === '') {
	//   If the reviewer did not rate the product, show the rateError error message and do not save the the new review.
   $w('#rateError').show();
   return Promise.reject();
  }

// If the reviewer did rate the product, use the setFieldValues function to update the SubmitReviews dataset.
  $w('#submitReviews').setFieldValues({
   itemID,
  //  Update the dataset item with the input element values. The item will then be saved to the reviews collection.
   rating: $w('#ratingsInput1').value,
   review_title: $w('#reviewTitle').value,
   full_review: $w('#fullReview').value,
   hcp: $w('#hcpCheckbox').value,
   email_opt_in: $w('#emailCheckbox').value,
   email_address: $w('#emailAddress').value
  });
 });

  $w('#submitReviews').onAfterSave(async () => {
  await updateStatistics($w('#ratingsInput1').value);
  wixWindow.lightbox.close();
 });
});

// This function updates the statistics stored in the review-stats collection to include data from the current review. If no previous statistics exist for the current product, it creates a new statistics item.
async function updateStatistics(isRecommended) {
 let stats = await wixData.get('review-stats', itemID);

 if (stats) {
  stats.rating += parseInt($w('#ratingsInput1').value, 10); 
  stats.count += 1; 
  // stats.recommended += (isRecommended === "true") ? 1 : 0;
  return wixData.update('review-stats', stats)
 }
 
    stats = {
  _id: itemID,
  rating: parseInt($w('#ratingsInput1').value, 10),
  count: 1,
  // recommended: (isRecommended === "true") ? 1 : 0
 };
 return wixData.insert('review-stats', stats)
}


export function submitReviewButton_click(event, $w) {
	//Add your code for this event here: 
}
