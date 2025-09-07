import { pals } from './data/data';

function includesIgnoreCase(s1, s2) {
    return s1.toLowerCase().includes(s2.toLowerCase());
}

function checkIdSearchMatch(searchString, id) {
    return includesIgnoreCase(pals[id].no, searchString) || includesIgnoreCase(pals[id].name, searchString);
}

function checkPalSearchMatch(searchString, pal) {
    return includesIgnoreCase(pal.no, searchString) || includesIgnoreCase(pal.name, searchString);
}

function sortFromIds(a, b) {
    return pals[a].sortIndex - pals[b].sortIndex;
}

function sortPalIds(list) {
    return list.sort(sortFromIds);
}

export { checkIdSearchMatch, checkPalSearchMatch, sortPalIds };