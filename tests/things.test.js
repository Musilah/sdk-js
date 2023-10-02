const axios = require('axios');
const mfsdk = require("mainflux-sdk");

jest.mock('axios');

describe('Things', () => {
    const things_url = "http://localhost:9000";
    const thing = {
        "name": "thingName",
        "tags": [
            "tag1",
            "tag2"
        ],
        "credentials": {
            "identity": "thingidentity",
            "secret": "bb7edb32-2eac-4aad-aebe-ed96fe073879"
        },
        "owner": "bb7edb32-2eac-4aad-aebe-ed96fe073879",
        "metadata": {
            "domain": "example.com"
        },
        "status": "enabled"
    };
    const thing_id = "bb7edb32-2eac-4aad-aebe-ed96fe073879";
    const channel_id = "bb7edb32-2eac-4aad-aebe-ed96fe073879";
    const thing_ids = ["6cba4ea5-5820-4419-b389-86984309ad35","2bb290ff-0cb1-4f06-9da3-aff91c1d039"];
    const channel_ids = ["2bb290ff-0cb1-4f06-9da3-aff91c1d039","6cba4ea5-5820-4419-b389-86984309ad35"];
    const actions = ["m_read", "m_write"];
    const action = ["m_read", "m_write"];
    const entity_type = "group";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjU3OTMwNjksImlhdCI6";
    const things = [
        {"name": "thing1", "id": "bb7edb32-2eac-4aad-aebe-ed96fe073879"},
        {"name": "thing2", "id": "bb7edb32-2eac-4aad-aebe-ed96fe073879"}
    ];
    const query_params = {
        "offset": 0, "limit": 10 
    };


    test('Create should create a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Create(thing, token).then(result => {

            expect(result).toEqual(thing);
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
        });
    });

    test('Create should handle a conflict error', ()=>{
        const errorResponse = {
            response: {
                status: 401,
            },
        };
        axios.request.mockRejectedValue(errorResponse);

        const expectedUrl = `${things_url}/things`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Create(thing, token).then(result => {

            expect(result).toEqual(thing);
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result.error.status).toBe(1);
            expect(result.error.message).toBe("Missing or invalid access token provided.");
        });

    });

    test('Create_bulk should create multiple things and return success', ()=>{
        axios.request.mockResolvedValue({ data: things});

        const expectedUrl = `${things_url}/things/bulk`;

        const sdk = new mfsdk({thingsUrl: things_url}); 
        return sdk.things.Create_bulk(things, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(things),
            });
            expect(result).toEqual(things);
        });
    });

    test('Update should update a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Update(thing_id, thing, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "patch",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Get should give a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Get(thing_id, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "get",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            expect(result).toEqual(thing);
        });
    });

    test('Get by channel should provide a thing', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}/channels?${new URLSearchParams(query_params).toString()}`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Get_by_channel(thing_id, query_params, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "get",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            expect(result).toEqual(thing);
        });
    });

    test('Get all should return a thing', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${this.things_url}/things?${new URLSearchParams(query_params).toString()}`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Get_all(query_params, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "get",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            expect(result).toEqual(thing);
        });
    });

    test('Disable should delete a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}/disable`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Disable(thing_id, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            expect(result).toEqual(thing);
        });
    });

    test('Update should update a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Update(thing_id, thing, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "patch",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Update thing secret should update a thing secret and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}/secret`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Update_thing_secret(thing_id, thing, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "patch",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Update thing tags should update a thing tags and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}/tags`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Update_thing_tags(thing_id, thing, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "patch",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Update thing owner should update a thing owner and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}/owner`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Update_thing_owner(thing_id, thing, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "patch",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Update should update a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/things/${thing_id}`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Update(thing_id, thing, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "patch",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(thing),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Connect should connect a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/policies`;
        const payload = { "subject": thing_id, "object": channel_id, "action": action };

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Connect(thing_id, channel_id, action, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(payload),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Connects should connect things and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/connect`;
        const payload = { "subjects": thing_ids, "objects": channel_ids, "actions": actions };

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Connects(thing_ids, channel_ids, actions, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(payload),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Disconnect should disconnect things and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/disconnect`;
        const payload = {  "subjects": thing_id, "objects": channel_id };

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Connects(thing_ids, channel_ids, actions, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(payload),
            });
            expect(result).toEqual(thing);
        });
    });

    test('Identify thing should identify a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/identify`;

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Identify_thing(thing_key).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Thing ${thing_key}`,
                },
            });
            expect(result).toEqual(thing);
        });
    });

    test('Authorise thing should authorise a thing and return success', ()=>{
        axios.request.mockResolvedValue({ data: thing});

        const expectedUrl = `${things_url}/disconnect`;
        const access_request = {
            "subject": thing_id,
            "object": channel_id,
            "action": action,
            "entity_type": entity_type
          };

        const sdk = new mfsdk({thingsUrl: things_url});
        return sdk.things.Authorise_thing(thing_id, channel_id, action, entity_type, token).then(result => {
            expect(axios.request).toHaveBeenCalledWith({
                method: "post",
                maxBodyLength: Infinity,
                url: expectedUrl,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: JSON.stringify(access_request),
            });
            expect(result).toEqual(thing);
        });
    });

});