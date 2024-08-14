$(document).ready(function() {
    var job = $(".job");
    var delay = 100;
    var timeoutId;

    function typeSentence(sentence, index, callback) {
        var current = sentence.substr(0, index + 1);
        job.attr("data-job2", current);

        if (index < sentence.length - 1) {
            timeoutId = setTimeout(function() {
                typeSentence(sentence, index + 1, callback);
            }, delay);
        } else {
            callback();
        }
    }

 

    function type(job) {
        var sentence = job.attr("data-job1");
        clearTimeout(timeoutId);
        typeSentence(sentence, 0, function() {
            setTimeout(function() {
                deleteType(job);
            }, 1000);
        });
    }

    function deleteType(job) {
        var sentence = job.attr("data-job1");
        clearTimeout(timeoutId);
        deleteSentence(sentence, sentence.length, function() {
            setTimeout(function() {
                type(job);
            }, 100);
        });
    }

    type(job);
});
