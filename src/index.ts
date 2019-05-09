import axios from 'axios';
import { ITrackerObject } from './TrackerDataBuilder';

export class PAM {
  private pamURL: string;
  constructor(url: string) {
    if (url.endsWith('/')) {
      url = url.slice(0, url.length - 1);
    }
    this.pamURL = url;
  }

  public getPamURL(): string {
    return this.pamURL;
  }

  public get trackerURL() {
    return this.pamURL + '/trackers/events';
  }

  public postEvent(eventName: string, trackObject: ITrackerObject, contactId: string = ''): Promise<any> {
    let headersWithCookie = {};

    if (contactId !== '') {
      headersWithCookie = {
        'Content-Type': 'application/json',
      };
    } else {
      headersWithCookie = {
        'Content-Type': 'application/json',
        Cookie: `contact_id=${contactId}`,
      };
    }

    return new Promise((resolve, reject) => {
      axios
        .post(this.trackerURL, trackObject, {
          headers: headersWithCookie,
        })
        .then(response => {
          resolve(response);
        })
        .catch( err=>{
          console.log(err)
        })
    });
  }
}

export const createClient = (pamServer: string) => new PAM(pamServer);
