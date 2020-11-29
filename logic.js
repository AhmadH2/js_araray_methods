
let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];


// 1.Convert all tags to uppercase.
uppercaseTags = tags.map((element)=> element.toUpperCase());

document.getElementById('upperCase').innerHTML= uppercaseTags;

//2. Exclude all xml and json tags.
execludedTags = tags.filter((tag) => !((tag == 'json') || (tag == 'xml')));

document.getElementById('exclude').innerHTML = execludedTags;


//3. Use reduce() method to return an object that contains tags count.
let tagsCount = tags.reduce(countTags, {});

function countTags(totalObj, tag) {
    if (totalObj[tag] == undefined) {
        totalObj[tag] = 1;
    }
    else {
        totalObj[tag]++;
    }
    return totalObj;
}

let str = '{';

for (attr in tagsCount) {
    str += attr + ': ' + tagsCount[attr] + ', ';
}

str = str.slice(0, -2);
str += '}';

document.getElementById('countTags').innerHTML = str;
