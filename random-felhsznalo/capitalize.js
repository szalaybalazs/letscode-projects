function capitalize(string) {
	//a kapott szöveg első betűjét capitálissá teszi, majd a maradékot utánailleszti
    return string.charAt(0).toUpperCase() + string.slice(1);
}