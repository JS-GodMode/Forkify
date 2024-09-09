import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './PreviewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'NO recipes found for your query! Please try again!';
  _message = '';
  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
