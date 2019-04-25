export interface ITrackerObject {
  [key: string]: any;
}

export class TrackerDataBuilder {
  private trackerObject: ITrackerObject;

  constructor(eventName: string) {
    this.trackerObject = {
      event: eventName,
    };
    const formField: ITrackerObject = {};
    this.trackerObject.form_fields = formField;
  }

  public langauge(val: string): TrackerDataBuilder {
    this.trackerObject.page_language = val;
    return this;
  }

  public referer(val: string): TrackerDataBuilder {
    this.trackerObject.page_referrer = val;
    return this;
  }

  public pageTitle(val: string): TrackerDataBuilder {
    this.trackerObject.page_title = val;
    return this;
  }

  public pageUrl(val: string): TrackerDataBuilder {
    this.trackerObject.page_url = val;
    return this;
  }

  public platform(val: string): TrackerDataBuilder {
    this.trackerObject.platform = val;
    return this;
  }

  public resolution(val: string): TrackerDataBuilder {
    this.trackerObject.resolution = val;
    return this;
  }

  public tags(val: [string]): TrackerDataBuilder {
    this.trackerObject.tags = val.join(',');
    return this;
  }

  public addFormField(name: string, val: any): TrackerDataBuilder {
    this.trackerObject.form_fields[name] = val;
    return this;
  }

  public addMedia(name: string, val: any): TrackerDataBuilder {
    return this.addFormField(name, val);
  }

  public campaignId(campaignId: string): TrackerDataBuilder {
    this.trackerObject.form_fields._campaign = campaignId;
    return this;
  }

  public contactId(val: string) {
    this.trackerObject.form_fields.contact_id = val;
    return this;
  }

  public build(): ITrackerObject {
    return this.trackerObject;
  }
}
