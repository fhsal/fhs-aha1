function sample(rallyCapID) {
   $.ajax({
    "url": "https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/solutioncapability/" + rallyCapID,
    "method": "GET",
    // "timeout": 0,
    "crossDomain": true,
    "access-control-allow-origin": "*",
    "headers": { "ZSESSIONID": localStorage.rallyID },
    })
    .then(function(response1) {
        console.log("rally 1st call")
        rallyCapSummary = response1
              console.log(response1)
    if(rallyCapSummary.OperationResult){
          console.log('======> Rally access error, rallyObjectID: ' + rallyCapID)
      // log error     
           let rallyLogItem = {rallyName: rallyObjectName, rallyID: rallyObjectID, rallyFrmatID: rallyFormattedID, ahaID: epicNum}
           rallyObjectErrorLog.push(rallyLogItem)
      // call next Epic
           epicCount = epicCount-1 
           checkEpicsDone(epicCount) 
        }     
            rallyLeafStoryPoints = rallyCapSummary.SolutionCapability.LeafStoryPlanEstimateTotal;
            rallyPercentComplete = rallyCapSummary.SolutionCapability.PercentDoneByStoryPlanEstimate;
            rallyFormattedID = rallyCapSummary.SolutionCapability.FormattedID;
            rallyPointsDone = rallyLeafStoryPoints*rallyPercentComplete;
        console.log("Rally FormattedID: " + rallyFormattedID)
        console.log("Rally ObjectID: " + rallyCapID)
        console.log("Rally Capability Name: " + rallyObjectName)
        console.log("Rally Total Story Points: " + rallyLeafStoryPoints)
        console.log("Rally Points Done: " + rallyPointsDone)

       $.ajax({
        "url": "https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/solutioncapability/" + rallyCapID + "/children?pagesize=100",
        "method": "GET",
        // "timeout": 0,
        "crossDomain": true,
        "access-control-allow-origin": "*",
        "headers": { "ZSESSIONID": localStorage.rallyID },
        }).then(function(response2) {

            console.log("rally 2nd call")
            rallyCapChildren = response2
                  console.log(response2)
                rallySummary = rallyCapChildren.QueryResult.Results

// computing total Feature estimate in the Rally Solution Capability children response
// test to see if there are children, if yes then operate on result for date and total points for Features
    if (rallySummary.length>0){

   console.log("has children")   
          rallyFeatTotal = rallySummary.reduce(function(previousValue, currentValue) {
              return {PreliminaryEstimateValue: previousValue.PreliminaryEstimateValue + currentValue.PreliminaryEstimateValue}
            });
        // force total estimate for the Capabilility to be the larger of Feature Estimates or LeafStoryPoints  
          rallyFeatTotal = rallyFeatTotal.PreliminaryEstimateValue
          let originalRallyFeatTotal = rallyFeatTotal
            if(rallyFeatTotal<rallyLeafStoryPoints){
               rallyFeatTotal=rallyLeafStoryPoints
               console.log("------------> adjusted estimate from " + originalRallyFeatTotal + " to " + rallyLeafStoryPoints) 
               }
        // force percent complete for the Capabilility to be 100% if rally work is marked as 100%
            // if(rallyPercentComplete=1){newRallyPercentComplete=1}
               newRallyPercentComplete = rallyPointsDone/rallyFeatTotal
              }
       else {
        console.log("does not have children") 
            if (rallyPointsDone !==0){
                newRallyPercentComplete = rallyCapSummary.SolutionCapability.PercentDoneByStoryPlanEstimate
      // log those Rally items where the app doesn't have permissions to see the children          
              let rallyLogItem = {rallyName: rallyObjectName, rallyID: rallyObjectID, rallyFrmatID: rallyFormattedID, ahaID: epicNum}
              rallyObjectErrorLog.push(rallyLogItem)
             console.log("Rally error log item: " + rallyLogItem) 
            }
                else {newRallyPercentComplete = 0}
          rallyFeatTotal=rallyLeafStoryPoints;
          }

      // console.log("Rally Feature Points: " + rallylateDate);
        console.log("Rally Feature Total: " + rallyFeatTotal + ' points');
        console.log("Rally Points Done: " + rallyPointsDone);
        console.log("New Rally Feature-based Percent Complete: " + Math.round(100*newRallyPercentComplete) + "%");

      let rallyEpicEffort = rallyFeatTotal;
          if (rallyEpicEffort > 0) { rallyEpicEffort = rallyEpicEffort} else { rallyEpicEffort = 0} ;
            let rallyEpicProgress = newRallyPercentComplete;
            let rallyEpicEffortCompl = rallyPointsDone;
          if (rallyEpicEffortCompl > 0) { rallyEpicEffortCompl = rallyEpicEffortCompl} else { rallyEpicEffortCompl = 0} ;
            rallyMSeffortSum = rallyMSeffortSum + rallyEpicEffort;
            rallyMScompleteSum = Math.round(rallyMScompleteSum + rallyEpicEffortCompl)
          if (rallyMSeffortSum>0) {rallyMSpercentComplete = Math.round(100*rallyMScompleteSum/rallyMSeffortSum)} else {rallyMSpercentComplete = 0}

          console.log("Rally MS effort Sum subtotal: " + rallyMSeffortSum);
          console.log("Rally MS complete Sum subtotal: " + rallyMScompleteSum);

          let epicObject = {
                "epicID" : epicInfo.epic.id,
                "epicName" :epicInfo.epic.name.slice(0, 30),
                "epicEffort" :  rallyEpicEffort,
                "epicProgress" : rallyEpicProgress,
                "epicEffortDone" : rallyEpicEffortCompl
              }
          console.log('from Ajax, epicCount: ' + epicCount )
                  epicSummary.push(epicObject)
            epicCount = epicCount-1 
            checkEpicsDone(epicCount) 
       });
    })}


function asyncSample(epicNumber) {

  console.log('asyncSample, Aha! epicNum: ' + epicNumber)
    
      $.ajax({
        "url": "https://optum.aha.io/api/v1/epics/" + epicNumber,
        "method": "GET",
        // "timeout": 0,
        "crossDomain": true,
        "access-control-allow-origin": "*",
        "headers": { "Authorization": localStorage.ahaToken, },
        })
      .then(function (response) {
              epicInfo = response
                        console.log(response)
              let epicID = epicInfo.epic.id;         
              let epicName = epicInfo.epic.name;
                  rallyCapID = rallyObjectRow[0].value;
                  rallyObjectName =  rallyNameRow[0].value;
        $.ajax({
        "url": "htps://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/solutioncapability/" + rallyCapID,
        "method": "GET",
        // "timeout": 0,
        "crossDomain": true,
        "access-control-allow-origin": "*",
        "headers": { "ZSESSIONID": localStorage.rallyID },
        })
        .then(function(response1) {
            console.log("rally 1st call")
            rallyCapSummary = response1
                  console.log(response1)

          $.ajax({
            "url": "https://rally1.rallydev.com/slm/webservice/v2.0/portfolioitem/solutioncapability/" + rallyCapID + "/children?pagesize=100",
            "method": "GET",
            // "timeout": 0,
            "crossDomain": true,
            "access-control-allow-origin": "*",
            "headers": { "ZSESSIONID": localStorage.rallyID },
            }).then(function(response2) {

                console.log("rally 2nd call")
                rallyCapChildren = response2
                      console.log(response2)
                    rallySummary = rallyCapChildren.QueryResult.Results

    });
  })})}