// For full API documentation, including code examples, visit http://wix.to/94BuAAs

import wixData from 'wix-data';

// $w.onReady(function () {
// 	//TODO: write your page related code here...

// });

// ... filter to treatment

//app type filter buttons

export function treatmentButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Treatment")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Treatment'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

// ... filter to peer support
export function peerSupportButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Peer Support")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Peer Support'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function symptomInfoButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Symptom Info")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Symptom Info'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function apptMgmtButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Appt. Mgmt.")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appTtype', 'Appointment Management'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function prescriptionMgmtButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Prescription Mgmt.")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Prescription Management'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function trackingButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Tracking")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Tracking'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function telemedicineButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Telemedicine")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Telemedicine'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function otherButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering app type to Other")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('appType', 'Other'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

//health category filter buttons
export function addictionButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering health category to Addiction")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Addiction'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function diabetesButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering health category to Diabetes")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Diabetes'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function weightMgmtButton_click(event) {
	//Add your code for this event here:
	console.log("Filtering condition to Weight Management")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Weight Management'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

// export function fitnessButton_click(event) {
// 	//Add your code for this event here: 
// 				console.log("Filtering condition to Fitness")

// 	$w('#fullAppCollection').setFilter(wixData.filter().contains('conditionS', 'Fitness'))

// 		.catch((error) => {
// 	let errorMsg = error.message;
// 	let code = error.code;
// 		});	
// }

export function cancerButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering health category to Cancer")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Cancer'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

//GI, respiratory, mental health, women's health

export function gastrointestinalButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering health category to gastointestinal")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Gastrointestinal'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function respiratoryButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering health category to Respiratory")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Respiratory'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function mentalHealthButton_click(event) {
	//Add your code for this event here: 
	console.log("Filtering health category to Mental Health")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Mental Health'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function womensHealthButton_click(event) {
	//Add your code for this event here:
	console.log("Filtering health category to Women's Health")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', "Women's Health"))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

export function otherConditionButton_click(event) {
	//Add your code for this event here:
	console.log("Filtering health category to Other")

	$w('#fullAppCollection').setFilter(wixData.filter().contains('healthCategory', 'Other'))

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

// clear current filters button
export function clearFilters_click(event) {
	//Add your code for this event here: 
	console.log("Attempting to clear filters")
	$w('#fullAppCollection').setFilter(wixData.filter())
		.then(() => {
			console.log("Dataset filters have been cleared")
		})

		.catch((error) => {
			let errorMsg = error.message;
			let code = error.code;
		});
}

// //updated ratings code - for lightbox reviews and syncd scores
import wixWindow from 'wix-window';

export async function addReview_click(event, $w) {
	//Add your code for this event here: 
	// let receivedData = wixWindow.lightbox.getContext();
	const currentItem = $w("#fullAppCollection").getCurrentItem();

	//getItemID
	const itemID = event.context.itemId;
    
	// Create a dataForLightbox object contaning the current product's ID to be sent to the Review Box lightbox.
	const dataForLightbox = {
							itemID: itemID
							};

	// Open the Review Box lightbox, send it the item ID object created above, and wait for it to close.						
	let result = await wixWindow.openLightbox('Review', dataForLightbox);

		// 	const dataForLightbox = {
		// 	productId: product._id
		// 	};
		// 	let result = await wixWindow.openLightbox('Review Box', dataForLightbox);
		// 	$w('#Reviews').refresh();
		// 	loadStatistics();
		// 	$w('#thankYouMessage').show();
	}

$w.onReady(function () {
 $w("#repeater1").onItemReady( ($item, itemData, index) => {
	let rating = itemData.iOsStoreRating

	// deduct if app is not agency approved + hide check and show X
	if (itemData.agencyApproved === 'No') {
		rating = rating - 0.5
		
		// hide check
		$item("#healthAgencyCertifiedCheck").hide();
		}

	// hide X if app is approved
	if (itemData.agencyApproved === 'Yes') {
		$item("#healthAgencyCertifiedX").hide();
		}

	// remove checkmark, x, and text if app is NA for agency approval
	if (itemData.agencyApproved === "NA") {
		// set code to hide text element, check, and X
    $item('#healthAgencyCertified').hide();
    $item('#healthAgencyCertifiedX').hide();
    $item("#healthAgencyCertifiedCheck").hide();
		//but no deduction
		}
	
	// deduct if app does not have end user input
	if (itemData.endUserInput === 'No') {
		rating = rating - 0.5
		
		// hide check
		$item("#endUserInputCheck").hide();
		}

	// hide x if app has user input
	if (itemData.endUserInput === 'Yes') {
		$item("#endUserInputX").hide();
		}

	// remove checkmark, x and text if app is NA for end user input	
	if (itemData.endUserInput === "NA") {
		// set code to hide text element, check, and X
		$item('#endUserInput').hide();
		$item('#endUserInputX').hide();
		$item("#endUserInputCheck").hide();
		//but no deduction
		}

	// deduct if app does not have positive peer review results (either negative or no peer review should be deducted, only exception for NA)
	
	// if (itemData.peerReviewResults !== 'Positive' && itemData.peerReviewed !== 'NA') {
	// 	rating = rating - 0.5
		
	// 	// hide check
	// 	$item("#peerReviewResultsCheck").hide();
	// }

	// tried nesting instead of and - when I kill this, the ratings are OK
	if (itemData.peerReviewResults === 'Negative' || itemData.peerReviewResults === 'Mixed' || itemData.peerReviewResults === 'None') {
	// if (itemData.peerReviewResults === "None") {
		//switching None to gibberish changes the results. So none is actually evaluating as true?
		rating = rating - 0.5
		
		// hide check
		$item("#peerReviewedCheck").hide();
	}

	// hide x if app has pos peer review (study validation)
	if (itemData.peerReviewResults === 'Positive') {
		$item("#peerReviewedX").hide();
	}
	
	// remove checkmark, x and text if app is NA for peer review (different field than peer review results)
	if (itemData.peerReviewed === "NA") {
		// set code to hide text element, check, and X
		$item('#peerReviewed').hide();
		$item('#peerReviewedX').hide();
		$item("#peerReviewedCheck").hide();
		//but no deduction
		}
		
   $item("#ratingsDisplay1").rating = rating
 } );
 } );


//  let stats = await wixData.get('review-stats', itemID);

//  if (stats) {
//   stats.rating += parseInt($w('#ratingsInput1').value, 10); 
//   stats.count += 1; 
//   // stats.recommended += (isRecommended === "true") ? 1 : 0;
//   return wixData.update('review-stats', stats)
//  }
 
//     stats = {
//   _id: itemID,
//   rating: parseInt($w('#ratingsInput1').value, 10),
//   count: 1,
//   // recommended: (isRecommended === "true") ? 1 : 0
//  };
//  return wixData.insert('review-stats', stats)
